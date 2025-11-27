import Image from "next/image";

export default function AdminTopbar() {
  return (
    <div className="w-full h-16 bg-white shadow-sm flex items-center justify-between px-6 border-b">
      <h2 className="text-xl font-semibold">Welcome, Admin</h2>

      <div className="flex items-center gap-3">
        <span className="text-gray-600">Admin</span>
        <Image
          src="/admin-avatar.png"
          width={40}
          height={40}
          className="rounded-full border"
          alt="Admin"
        />
      </div>
    </div>
  );
}
