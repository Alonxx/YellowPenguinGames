import { Image, Button } from "@nextui-org/react";

export const GameCard = ({
  icon,
  title,
  url,
}: {
  icon: string;
  title: string;
  url: string;
}) => {
  return (
    <div className="bg-[#18181b] h-20 flex flex-row px-5 items-center rounded-3xl shadow-xl w-full min-w-full">
      <Image src={icon} alt="game_icon" className="w-12 h-12" />

      <p className=" justify-self-center ml-auto text-md tracking-[0.15em] text-white">
        {title}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="justify-self-end ml-auto"
      >
        <Button
          className="text-tiny text-black bg-white "
          variant="flat"
          radius="lg"
          size="sm"
        >
          Go to store
        </Button>
      </a>
    </div>
  );
};
