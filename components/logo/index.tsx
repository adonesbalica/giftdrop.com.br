import { Gift } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-3 text-white">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F97316] shadow-lg shadow-[#F97316]/30">
        <Gift className="h-7 w-7 text-white" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        GiftDrop
      </h1>
    </div>
  );
}
