import { ThemeLayout } from "@/shared/layouts/themeLayout";
import { Register } from "@/widgets/register-slice/register";

export default function Home() {
  return (
    <>
      <ThemeLayout>
        <Register />
      </ThemeLayout>
    </>
  );
}
