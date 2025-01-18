import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { AntdRegistry } from "@ant-design/nextjs-registry";
// import localFont from "next/font/local";
import { ConfigProvider } from "antd";
import { mainTheme } from "@/theme";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Stripe Intregate",
};

// ${skia.variable}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextTopLoader
          color="#D3EBE7"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease-in-out"
          speed={200}
          shadow="0 0 10px #D3EBE7,0 0 5px #D3EBE7"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <Toaster position="top-center" richColors />
        <AntdRegistry>
          <ConfigProvider theme={mainTheme}>{children}</ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
