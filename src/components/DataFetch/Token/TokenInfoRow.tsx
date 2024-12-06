interface TokenInfoRowProps {
  label: string;
  value: string | number;
}
export default function TokenInfoRow({ label, value }: TokenInfoRowProps) {
  const isPriceChange = label === "Price Change (24h)";
  const isNegative = typeof value === "string" && value.includes("-");

  return (
    <div className="flex justify-between items-center fontSizeFromLg text-primary-colors">
      <span className="font-normal">{label}</span>
      <span
        className={`font-semibold ${
          isPriceChange ? (isNegative ? "text-red-500" : "text-green-500") : ""
        }`}
      >
        {value || "N/A"}
      </span>
    </div>
  );
}
