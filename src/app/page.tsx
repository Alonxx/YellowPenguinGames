import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Avatar,
  Input,
  Textarea,
  Divider,
} from "@nextui-org/react";

export default function Home() {
  return (
    <div className="h-[100vh]">
      <div className="flex justify-center pt-10 items-center flex-col ">
        <Image
          src="https://alonxx.github.io/YellowPenguinGames/images/ypg_logo.png"
          alt="Yellow Penguin Games Logo"
          className="w-20"
        />
      </div>
      <div className="flex justify-center mt-12 p-3 pb-20 flex-col items-center">
        <p className="text-[#cbd1d9] text-lg sm:text-2xl text-center mb-8 font-semibold tracking-[0.5em]">
          MOST RECENT GAME
        </p>

        <Card shadow="lg" isFooterBlurred radius="lg" className="border-none">
          <Image
            alt="game"
            className="object-cover"
            height={250}
            width={250}
            src="https://alonxx.github.io/YellowPenguinGames/images/toast_brawl_bg.png"
          />

          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1  absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny tracking-wider text-white/80">
              Toast Brawl
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.yellowpenguin.toastbrawl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="text-tiny text-white bg-black/50 "
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Go to store
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
