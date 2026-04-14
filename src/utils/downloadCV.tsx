"use client";

export function downloadCV(): void {
  const link = document.createElement("a");
  link.href = "/files/Rinaldo.pdf";
  link.download = "Rinaldo.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
