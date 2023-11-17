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
} from "@nextui-org/react";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-center pt-10 flex-col items-center">
        <Avatar
          src="/images/ypg_logo.png"
          isBordered
          className="w-24 h-24 text-large bg-[#f7ca4c]"
        />
        <h1 className="text-3xl mt-2 text-black text-center">
          Yellow Penguin <br /> Games
        </h1>
      </div>

      <div className="flex justify-center mt-12 p-3 pb-20 flex-col items-center">
        <p className="text-black text-3xl text-center mb-8">Recent game</p>
        <Card isFooterBlurred className="w-72 h-60">
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="/images/toast_brawl_bg.png"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Toast Brawl Icon"
                className="rounded-xl w-auto h-12 bg-black"
                src="/images/toast_brawl_icon.png"
              />
              <div className="flex flex-col">
                <p className="text-md text-white">Toast Brawl</p>
                <p className="text-xs text-white"> 1v1 toasters battles</p>
              </div>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.yellowpenguin.toastbrawl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button radius="md" size="sm" color="primary">
                Go to store
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>

      <div className="flex justify-center  p-3 pb-20 flex-col items-center">
        <p className="text-black text-3xl text-center mb-8">Support</p>
        <div className="gap-7 grid grid-cols-1">
          <Input
            type="email"
            label={<h1 className="text-black ml-2 ">Email:</h1>}
            labelPlacement="outside"
            placeholder="Enter your email"
            size="md"
            className="w-52 text-white"
          />
          <Textarea
            label={<h1 className="text-black  ml-2 "> Comments:</h1>}
            labelPlacement="outside"
            placeholder="Enter your comments"
            minRows={3}
            className="w-80 text-white"
          />
        </div>
        <div className="mt-10">
          <Button variant="bordered" className="tracking-wide text-black">
            Send email
          </Button>
        </div>
      </div>
    </div>
  );
}
