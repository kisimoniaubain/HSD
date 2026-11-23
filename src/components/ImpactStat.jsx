export default function ImpactStat({ value, label }) {
  return (
    <div className="impact-stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
