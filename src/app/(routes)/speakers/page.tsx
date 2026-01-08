import ComingSoon from "@/component/ui/ComingSoon";

const Speakers = () => {
  return (
    <div className="flex flex-col md:min-h-screen pb-16 md:pb-0 bg-white font-bricolage-grotesque">
      <div className="flex flex-col items-center gap-6 justify-center pt-32 px-4 md:px-8">
        <ComingSoon />
      </div>
    </div>
  );
};

export default Speakers;
