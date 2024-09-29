
interface QuoteProps {
  quote: string;
}
const Quote = ({quote}:QuoteProps) => {
  return (
    <div className="hidden h-screen bg-gray-100 md:flex flex-col gap-4 justify-center p-24">
      <div className="font-bold text-3xl">
        "{quote}"
      </div>
      <div className="text-left">
        <div className="font-bold">- Chat GPT</div>
        <div className="text-gray-400">Your replacement</div>
      </div>
    </div>
  );
};

export default Quote;
