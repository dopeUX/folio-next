import Image from "next/image";
import AppLayout from "./Layouts/AppLayout/AppLayout.component";
import InitialLoadingScreen from "./Screens/InitialLoadingScreen/InitialLoadingScreen.component";

export default function Home() {
  return (
    <AppLayout>
      <InitialLoadingScreen />
    </AppLayout>
  );
}
