
const PartnerLogos = () => {
  // In a real implementation, these would be actual images with appropriate alt text
  return (
    <div className="py-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
        <div className="h-7 flex items-center">
          <div className="text-lg font-serif tracking-tight">CharlotteTilbury</div>
        </div>
        <div className="h-7 flex items-center">
          <div className="font-bold">blend</div>
        </div>
        <div className="h-7 flex items-center">
          <div className="font-bold">PayU</div>
        </div>
        <div className="h-7 flex items-center">
          <div className="font-bold">bitpanda</div>
        </div>
        <div className="h-7 flex items-center">
          <div className="font-bold">Breeze</div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mt-8 opacity-70">
        <div className="h-7 flex items-center">
          <div className="font-bold">cameo</div>
        </div>
        <div className="h-7 flex items-center">
          <div className="font-bold">built</div>
        </div>
        <div className="h-7 flex items-center">
          <div className="font-bold italic">Le Monde</div>
        </div>
        <div className="h-7 flex items-center">
          <div className="font-script">Hallington</div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
