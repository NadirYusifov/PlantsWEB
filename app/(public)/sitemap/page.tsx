import SiteMapAboutUs from "@/components/pages/SiteMap/SiteMapAboutUs";
import SiteMapBlog from "@/components/pages/SiteMap/SiteMapBlog";
import SiteMapContactUs from "@/components/pages/SiteMap/SiteMapContactUs";
import SiteMapDisclaimer from "@/components/pages/SiteMap/SiteMapDisclaimer";
import SiteMapFaq from "@/components/pages/SiteMap/SiteMapFaq";
import SiteMapHeader from "@/components/pages/SiteMap/SiteMapHeader";
import SiteMapHome from "@/components/pages/SiteMap/SiteMapHome";
import SiteMapPrivacyPolicy from "@/components/pages/SiteMap/SiteMapPrivacyPolicy";
import SiteMapService from "@/components/pages/SiteMap/SiteMapService";
import SiteMapTermsCond from "@/components/pages/SiteMap/SiteMapTermsCond";

export default function Sitemap() {
    return (
        <>
            <SiteMapHeader />
            <SiteMapHome />
            <SiteMapAboutUs />
            <SiteMapService />
            <SiteMapBlog />
            <SiteMapContactUs />
            <SiteMapFaq />
            <SiteMapTermsCond />
            <SiteMapPrivacyPolicy />
            <SiteMapDisclaimer />
        </>
    )
}
