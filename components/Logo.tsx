export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="logo" aria-label="Vishal General Store">
      <div className="logoMark">VGS</div>
      {!compact && (
        <div>
          <strong>विशाल जनरल स्टोर</strong>
          <span>Vishal General Store</span>
        </div>
      )}
    </div>
  );
}
