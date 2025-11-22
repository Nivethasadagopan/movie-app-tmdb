export default function Pagination({ page, totalPages, onChange }) {
  const prevDisabled = page <= 1;
  const nextDisabled = page >= totalPages;

  return (
    <div className="pagination">
      <button disabled={prevDisabled} onClick={() => onChange(page - 1)}>
        ← Prev
      </button>
      <span className="pageinfo">Page {page} of {totalPages}</span>
      <button disabled={nextDisabled} onClick={() => onChange(page + 1)}>
        Next →
      </button>
    </div>
  );
}
