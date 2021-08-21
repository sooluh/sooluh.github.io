function formattedDate(d) {
  const date = new Date(d);
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
  ];
  const showYear = date.getFullYear() !== new Date().getFullYear();
  const year = showYear ? date.getFullYear() : "";

  return `${date.getDate()} ${months[date.getMonth()]} ${year}`;
};

export { formattedDate };
