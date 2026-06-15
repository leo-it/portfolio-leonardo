import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/i18n/routing";
import { Container } from "@/components/ui/Container";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Container className="text-center">
        <p className="font-display text-8xl text-stage-gold">404</p>
        <h1 className="mt-4 font-display text-3xl text-stage-cream">{t("title")}</h1>
        <p className="mt-3 text-stage-cream/60">{t("description")}</p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full border border-stage-gold/60 px-6 py-3 text-sm text-stage-gold transition-colors hover:bg-stage-gold/10"
        >
          {t("back")}
        </Link>
      </Container>
    </div>
  );
}
