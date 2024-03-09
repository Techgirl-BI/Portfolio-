import React from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";

const Contact = () => {
  return (
    <div className="mt-16">
      <div className="ml-72">
        <h3 className="text-2xl font-bold text-blue-500">Contact</h3>
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <div className=" p-6 rounded-md flex flex-col items-center">
          <p className="text-gray-600 text-center mb-4">
            I'm currently seeking a position as a{" "}
            <span className="font-bold">remote</span> full stack web developer.
            Feel free to reach out.
          </p>
          <div className="mb-2 text-blue-500 hover:underline cursor-pointer">
            LinkedIn
          </div>
          <div className="mb-2 text-blue-500 hover:underline cursor-pointer">
            GitHub
          </div>
        </div>
        <div className="bg-gray-100 p-8 rounded-md bg-amber-200">
          <form className="flex flex-col gap-4">
            <div>
              <Label htmlFor="name" value="Name" />
              <TextInput id="name" type="text" placeholder="First Last" />
            </div>
            <div>
              <Label htmlFor="email" value="Email" />
              <TextInput
                id="email"
                type="email"
                placeholder="name@email.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="message" value="Message" />
              <Textarea
                id="message"
                placeholder="What can I do for you?"
              />
            </div>
            <Button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-700"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
