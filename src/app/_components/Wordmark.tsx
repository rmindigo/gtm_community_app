// "GTM" at full size, "ERS" a step down, so the brand reads as GTM + ers.
// Sized in em so it follows whatever font size the parent sets.
export default function Wordmark() {
  return (
    <>
      GTM<span className="text-[0.83em]">ERS</span>
    </>
  );
}
