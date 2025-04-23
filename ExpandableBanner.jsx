import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ExpandableBanner = ({ banners }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleImageClick = (index) => {
    if (isMobile || expandedIndex === index) {
      window.open(bannerLinks[index], "_blank");
      return;
    }
    setExpandedIndex(index);
  };

  const getImageWidth = (index) => {
    if (isMobile) {
      return `${100 / banners.length}%`;
    }

    const totalWidth = Math.min(windowWidth, 1520.8);
    const gap = 1; // 1px gap
    const totalGap = gap * (banners.length - 1);
    const availableWidth = totalWidth - totalGap;

    const totalParts = 7 + (banners.length - 1);
    const mainWidth = (availableWidth * 7) / totalParts;
    const smallWidth = (availableWidth * 1) / totalParts;

    return index === expandedIndex ? `${mainWidth}px` : `${smallWidth}px`;
  };

  const getImageUrl = (banner, index) => {
    if (expandedIndex === null || index !== expandedIndex || isMobile) {
      return banner.smallImageUrl || banner.imageUrl;
    }
    return banner.imageUrl;
  };

  const bannerLinks = [
    "https://www.eneba.com/sales/easter-week-sale?itm_source=eneba&itm_medium=banner&itm_campaign=Easter_Sale",
    "https://www.eneba.com/promo/internet-hits?itm_source=eneba&itm_medium=banner&itm_campaign=internet_hits",
    "https://www.eneba.com/promo/cheap-games?itm_source=eneba&itm_medium=banner&itm_campaign=cheap_games",
    "https://www.eneba.com/promo/the-last-of-us-series?itm_source=eneba&itm_medium=banner&itm_campaign=TLOU_II_Remastered",
  ];

  const getBannerHeight = () => {
    if (isMobile) return "auto";
    const totalWidth = Math.min(windowWidth, 1520.8);
    return `${totalWidth / (1520.8 / 304.15)}px`;
  };

  return (
    <div
      className="w-full flex justify-center"
      style={{ height: getBannerHeight() }}
    >
      <div
        className={`flex flex-row gap-[1px] ${
          isMobile ? "overflow-x-hidden" : "overflow-hidden"
        }`}
        style={{
          width: isMobile ? "100%" : `${Math.min(windowWidth, 1520.8)}px`,
          height: getBannerHeight(),
        }}
      >
        {banners.map((banner, index) => (
          <motion.div
            key={banner.id || index}
            className="relative cursor-pointer"
            style={{
              width: getImageWidth(index),
              height: isMobile ? "auto" : "100%",
              flexShrink: 0,
            }}
            initial={{ opacity: 0, width: getImageWidth(index) }}
            animate={{
              width: getImageWidth(index),
              opacity: 1,
            }}
            // transition={{
            //   duration: 0.4,
            //   ease: "linear",
            // }}
            onClick={() => handleImageClick(index)}
          >
            <img
              src={getImageUrl(banner, index)}
              alt={banner.title}
              className="w-full object-cover"
              style={{ height: isMobile ? "auto" : "100%" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExpandableBanner;
