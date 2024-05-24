interface FormattedLog {
  time: string;
  reps: string;
}

export const logToCSV = (log: FormattedLog[]): string => {
  const csvRows: string[] = [];
  const headers = Object.keys(log[0]);
  csvRows.push(headers.join(","));

  log.forEach((row) => {
    const values = headers.map((header) => {
      const escaped = ("" + row[header as keyof FormattedLog]).replace(
        /"/g,
        '\\"',
      );
      return `"${escaped}"`;
    });
    csvRows.push(values.join(","));
  });

  return csvRows.join("\n");
};
