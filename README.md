# home-care

    <div
      className="relative h-[525px] bg-red-500"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+525px)] -top-[100vh]">
        <div className="h-[525px] sticky top-[calc(100vh-525px)]">
          <div className="pt-16 pb-5 bg-highlight-color">
            <Container>
              <div className="flex flex-col lg:flex-row justify-between items-start  mx-auto mb-12">
                {/* 1st */}
                <div className="mb-10 lg:mb-0 lg:w-2/3 flex flex-col ">
                  <Image
                    src={AllImages.logo}
                    alt="logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[150px] md:w-[150px] lg:w-[150px]"
                  />
                  <p className="text-base-color mt-4  lg:text-lg mb-12 w-4/5">
                    At Advocate, Your Well-Being, Our Commitment. We provide
                    compassionate care, clear guidance, and unwavering support
                    throughout your home care journey.
                  </p>
                </div>

                {/* 2nd */}
                <div className="lg:w-1/3 flex flex-col gap-6 ">
                  <p className="font-semibold text-xl mb-2 text-secondary-color">
                    Links
                  </p>
                  <div className="flex flex-col gap-6">
                    <div>
                      <Link href="/contact-us">Contact Us</Link>
                    </div>
                    <div>
                      <Link href="/faq">FAQ</Link>
                    </div>
                    <div>
                      <Link href="/blogs">Blog</Link>
                    </div>
                  </div>
                </div>

                {/* 3rd */}
                <div className="lg:w-1/3 flex flex-col gap-6 justify-start mt-6 lg:mt-0">
                  <div>
                    <p className="font-semibold text-xl mb-2 text-secondary-color">
                      Follow us
                    </p>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="pl-0 p-2 rounded-full ">
                        <Link href="#">
                          <Image
                            src={allIcons.insta}
                            alt="play_store"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="h-[24px] w-[24px]"
                          />
                        </Link>
                      </div>
                      <div className="p-2 rounded-full ">
                        <Link href="#">
                          <Image
                            src={allIcons.linkedIn}
                            alt="play_store"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="h-[24px] w-[24px]"
                          />
                        </Link>
                      </div>
                      <div className="p-2 rounded-full ">
                        <Link href="#">
                          <Image
                            src={allIcons.facebook}
                            alt="play_store"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="h-[24px] w-[24px]"
                          />
                        </Link>
                      </div>
                      <div className="p-2 rounded-full ">
                        <Link href="#">
                          <Image
                            src={allIcons.twitterx}
                            alt="play_store"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="h-[24px] w-[24px]"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-xl mb-2 text-secondary-color">
                      Call us
                    </p>
                    <p className=" text-xl mb-2 text-base-color">
                      +1 (212) 444-3956
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-xl mb-2 text-secondary-color">
                      Email us
                    </p>
                    <p className=" text-xl mb-2 text-base-color">
                      clients@advocate.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="border-t border-[#222222] mt-10"></div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-10 gap-10 lg:gap-0 mb-10">
                  <div>
                    <p className="text-center text-base-color/50 text-lg ">
                      &copy; {currentYear} Advocate. All Rights Reserved.
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between gap-5 text-xl">
                    <Link href="/about-us">
                      <p className="text-base-color/60">About Us</p>
                    </Link>
                    <Link href="/faq">
                      <p className="text-base-color/60">FAQ</p>
                    </Link>
                    <Link href="/privacy-policy">
                      <p className="text-base-color/60">Privacy Policy</p>
                    </Link>
                    <Link href="/terms-of-use">
                      <p className="text-base-color/60">Terms of Use</p>
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
