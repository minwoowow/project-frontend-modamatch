import LogoutComponent from "../../components/Member/LogoutComponent";
import MainLayout from "../../layouts/MainLayout";

export default function LogoutPage() {

  return (
    <MainLayout>
      <div className="flex w-full h-full justify-center items-center text-2xl">
        <LogoutComponent />
      </div>
    </MainLayout>
  );
}
