import { ThemeLayout } from "@/shared/layouts/themeLayout";
import { Auth } from "@/widgets/auth-slice/auth";

export default function Home() {
  return (
    <>
      <ThemeLayout>
        <Auth />
      </ThemeLayout>
    </>
  );
}
