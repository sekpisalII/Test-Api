import { Label, TextInput } from "flowbite-react";

// import Link from "next/link";
export default function LoginComponent() {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="username3" value="Username" />
      </div>
      <TextInput id="username3" placeholder="Bonnie Green" addon="@" required />
    </div>
  );
}
