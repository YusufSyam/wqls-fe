import { format } from "date-fns";

const dayName = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];

// Date ke yyyy-mm-dd
export function formatDate(inputDate: Date) {
  const date = new Date(inputDate); // Membuat objek Date dari input tanggal
  const day = String(date.getDate()).padStart(2, "0"); // Mendapatkan tanggal (dd)
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Mendapatkan bulan (MM)
  const year = date.getFullYear(); // Mendapatkan tahun (YYYY)

  return `${year}-${month}-${day}`;
}

// yyyy-mm-dd ke Date
export function parseDatePost(dateString: String) {
  if (dateString == "") {
    return new Date();
  }

  const dateList = dateString?.split("-");
  const year = parseInt(dateList?.[0]);
  const month = parseInt(dateList?.[1]) - 1;
  const day = parseInt(dateList?.[2]);

  return new Date(year, month, day);
}

// Date ke 12 September 2001
export function formatDateNormal(inputDate: Date | null) {
  if (inputDate == null) {
    return "";
  }

  return inputDate.toLocaleDateString("id", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

// Date ke Rabu, 12 September 2001
export function formatDateNormalWithDayName(inputDate: Date) {
  return `${dayName[inputDate.getDay()]}, ${inputDate.toLocaleDateString("id", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })}`;
}

// Date ke string dd mmm

export function formatDateToDDMMM(inputDate: Date) {
  const formattedDate = format(inputDate, "dd MMM");

  return formattedDate;
}

// Hitung jarak waktu
export function calculateTimeGap(dateString: string, time: number): string {
  const date = new Date(dateString);

  const totalDetik = Math.floor(time);
  const jam = Math.floor(totalDetik / 3600) % 24;
  const menit = Math.floor((totalDetik % 3600) / 60);

  const dateTime = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    jam,
    menit
  );

  const selisihWaktu = new Date().getTime() - dateTime.getTime();

  const selisihMenit = Math.floor(selisihWaktu / (1000 * 60));

  if (selisihMenit < 60) {
    return `${selisihMenit} menit`;
  } else if (selisihMenit < 24 * 60) {
    const selisihJam = Math.floor(selisihMenit / 60);
    return `${selisihJam} jam`;
  } else {
    const selisihHari = Math.floor(selisihMenit / (60 * 24));
    return `${selisihHari} hari`;
  }
}

// Date to hh:mm
export function formatDateToHHMM(date?: Date): string {
  if (date == null) {
    return "";
  }

  try {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  } catch (error) {
    return "";
  }
}

// date to yyyy;mm;dd
export const formatDateToPost = (date: Date): string => {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

export const isSameDate = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export function getQuizDuration(duration: number) {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}m ${seconds}s`;
}
