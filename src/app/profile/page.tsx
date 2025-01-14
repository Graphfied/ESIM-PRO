import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import OptionListComponent from "@/components/profilePageComponents/OptionListComponent";

const Profile = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen items-center py-2 lg:px-[20rem] px-[1rem] space-y-4">
      <div className="w-full h-[18rem] flex flex-col justify-center items-center space-y-2 bg-white rounded-md py-4">
        <div className="h-[9rem] w-[9rem] rounded-full relative overflow-hidden object-contain">
          <Image alt="user" src="/user.jpg" fill />
        </div>
        <h2 className="text-[2rem] font-semibold">John Doe</h2>
        <p className="text-txtgrey">johndoe@email.com</p>
      </div>
      <div className="w-full h-[12rem] flex flex-col justify-center items-center space-y-2  rounded-md py-2 relative object-cover overflow-hidden bg-btndark text-white">
        <p className="text-txtgrey ">MobiMatter Rewards members get</p>
        <p>10% cashback on purchases</p>
        <p className="text-center">
          & up to $5 for every friend that get his first eSIM!
        </p>
        <Button className="bg-btnblue hover:bg-btnblue text-white" size="lg">
          {`Learn more`}
        </Button>
      </div>
      <OptionListComponent
        text="My eSIMs"
        img="/profile/eSim.svg"
        path="history"
      />
      <OptionListComponent
        text="Order History"
        img="/profile/shppingCart.svg"
        path="/history?type=history"
      />
      <OptionListComponent
        text="MobiMatter Rewards"
        img="/profile/eSim.svg"
        path="/wallet"
      />
      {/* <OptionListComponent
        text="Help & Support"
        img="/profile/help&support.svg"
        path="/history"
      /> */}
      <OptionListComponent
        text="FAQs"
        img="/profile/help&support.svg"
        path="/history"
      />
      <OptionListComponent
        text="Logout"
        img="/profile/logOut.svg"
        path="/history"
      />
    </div>
  );
};

export default Profile;
