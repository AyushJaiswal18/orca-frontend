import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside className="w-64 p-4 border-r bg-secondary h-screen flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center px-4 cursor-pointer">
          <h1 className="text-xl font-extrabold ">Orca Console</h1>
          <Icon className="w-10 h-10 font-extrabold" />
        </div>
        <hr className="my-3 border-black" />
        <nav className="space-y-2">
          <Link
            to="/dashboard"
            className="block px-4 py-2 text-base font-medium"
          >
            Dashboard
          </Link>
          <Link
            to="/launch-new-orca"
            className="block px-4 py-2 text-base font-medium"
          >
            Orca Services
          </Link>
          <Link
            to="/buy-credits"
            className="block px-4 py-2 text-base font-medium"
          >
            Buy Credits
          </Link>
          <Link to="/profile" className="block px-4 py-2 text-base font-medium">
            Profile
          </Link>
        </nav>
      </div>
      <div className="flex flex-col justify-end">
        <div className="mt-auto">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="mb-2">Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => {
                  navigate("/upgrade");
                }}
                size="sm"
                className="w-full"
              >
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </aside>
  );
}

function Logo(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}

function Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="1280"
      height="1280"
      viewBox="0 0 2000 2000"
    >
      <path
        fill="#0E1124"
        d="M663 380l21 3 44 11 29 9 22 8 35 16 16 8 26 15 15 10 14 10 12 9 14 12 11 9 6 5v2l4 2 14 14v2h2l9 11 10 11 10 13 11 15 13 17 9 8 17 10 14 6 30 7 35 9 37 12 33 12 17 8 23 13 12 8 22 15 13 10 14 12 11 9 33 33 9 11 11 13 11 15 10 15 9 15 8 16 9 19 8 24 4 18 3 21v36l-3 21-3 9-6 10-9 12-12 13-12 11-17 12-14 8-16 8-21 8-27 8-20 4-25 3-13 1h-49l-37-3-9-1-4-4 3-3 36-2 29-3 30-5 28-7 16-6 19-8 21-12 7-7 6-10 3-10v-16l-3-10-6-11-9-7-21-11-24-8-22-5-13-2-13-1h-20l-24 3-18 5-13 5-13 7-14 10-11 9-10 11-11 14-10 16-10 15-14 19-9 12-11 12-9 11-12 12-8 7-9 9-20 15-13 9-21 11-22 8-6 1h-13l-10-4-7-8-3-8v-12l4-17 5-12 9-19 9-24 8-25 4-20 2-19v-25l-3-24-5-17-9-21-9-15-11-12v-2l-4-2-9-8-20-12-14-5-17-4-21-2h-59l-27 3-23 4-25 7-27 11-21 11-16 11-12 9-10 9-17 17-10 14-11 16-12 22-10 24-9 25-7 30-4 26-3 33v44l2 22 4 25 3 10v3h4l2-15 9-39 6-20 8-21 8-17 13-22 9-13 7-7 7-8 8-6 7-3 6 1 4 3 1 3v8l-11 29-9 27-7 30-4 28-1 13v30l2 18 4 18 5 15 7 13 9 10 10 7 13 5 50 12 27 9 22 11 21 13 13 11 13 12 8 8 12 16 9 14 8 15 11 27 4 12v12l-7 8-2 1h-10l-18-11-16-7-18-5-21-3-66-1-17-3-17-5-16-7-8-1-8 4-5 8-8 17-8 12-9 10-10 9-12 11-14 10-12 9-6 3-8 3-10 9-10 14-12 23-7 14-7 11-5 5-6-1-9-9-10-15-8-18-6-21-2-10v-31l5-25 7-25 11-28 8-15 8-16 9-16 11-16 6-12 3-10v-15l-4-11-7-13-10-14-10-18-9-16-12-28-12-34-6-18-7-30-5-29-3-28-1-16v-39l3-35 5-32 6-26 12-36 10-25 7-16 13-23 12-20 13-18 10-14 10-11 8-10 12-13 24-24 8-7 13-11 12-9 10-8 26-17 18-11 18-10 28-14 30-12 19-10 9-7 7-6 1-2h2l2-4 9-12 7-16 4-15 1-7v-22l-4-18-8-22-10-20-12-20-8-12-12-16-14-17-9-10-4-5-1-9 5-8zm499 422l-9 3-5 5-1 2 1 9 6 9 4 5h2v2l13 10 17 9 19 8 15 4 9 1h9l9-2 7-6 1-2-1-9-6-10-5-6-12-9-18-10-15-7-19-5-8-1zM1113 1292h56l21 2 13 5 9 6 5 4 6 10 4 12v19l-5 15-8 10-13 8h-2l5 9 14 19 8 12 3 5-5 1h-21l-5-5-12-18-8-11-4-5h-35v38l-15 1h-11l-1-1v-135zm26 21l-1 2v53h38l9-2 8-5 5-6 3-8v-14l-4-9-7-6-12-4-9-1z"
      ></path>
      <path
        fill="#0E1124"
        d="M945 1291h27l16 4 12 6 13 10 8 10 7 14 3 11 1 8v13l-3 16-5 12-7 10-9 9-10 7-11 5-17 4h-25l-16-4-14-7-10-8-9-11-7-14-4-14-1-6v-11l3-14 5-13 9-14 9-9 16-9 13-4zm7 21l-14 4-10 6-8 8-6 11-3 8-1 5v13l3 11 6 11 9 10 14 7 9 2h15l11-3 12-6 8-8 7-14 2-9v-14l-3-13-6-11-8-8-16-8-9-2zM1548 1292h23l3 3 14 30 19 43 17 37 9 21v2l-3 1h-21l-3-1-12-30-69-1-3 9-6 15-4 7-24 1-2-2 7-15 15-35 11-23 13-30 14-30zm10 27l-5 12-14 34-5 10v2h50l-1-5-15-36-7-16zM1359 1291h28l15 4 17 9 7 7-1 4-9 9h-2l-1 3-3 1-11-8-11-5-8-2h-13l-14 4-10 6-7 6-6 10-4 16v12l4 15 6 10 10 8 11 5 10 2h14l12-3 9-5 7-6 5 2 12 11-2 5-7 7-16 8-16 4-13 1-19-2-15-5-10-6-12-11-9-12-5-13-3-16v-11l3-17 6-14 8-10 10-10 12-7 15-5z"
      ></path>
    </svg>
  );
}
