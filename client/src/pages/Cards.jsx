import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
      <link
        rel="stylesheet"
        as="style"
        onLoad={() => { document.querySelector('link[rel="stylesheet"]').rel = 'stylesheet'; }}
        href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&family=Public+Sans%3Awght%40400%3B500%3B700%3B900"
      />
      <title>Galileo Design</title>
      <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
      <div className="relative flex size-full min-h-screen flex-col bg-[#f9fcf8] group/design-root overflow-x-hidden" style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}>
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="@container">
                <div className="@[480px]:p-4">
                  <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                    style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/474422bf-cda9-4874-84f4-88dcc5f14b38.png")' }}
                  >
                    <div className="flex flex-col gap-2 text-left">
                      <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                        Welcome back, Kisaan Bazar
                      </h1>
                      <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">Your profile</h2>
                    </div>
                    <div className="flex-wrap gap-3 flex">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#5de619] text-[#121b0e] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                        <span className="truncate">Edit Profile</span>
                      </button>
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#ebf3e7] text-[#121b0e] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                        <span className="truncate">Switch Account</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-[#121b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Listings</h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/109610ff-d989-4c34-afd8-cf2e271980c6.png")' }}
                  />
                  <div>
                    <p className="text-[#121b0e] text-base font-medium leading-normal">Tomatoes</p>
                    <p className="text-[#67974e] text-sm font-normal leading-normal">$2.50/lb</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/db301f03-876b-4ebe-ac58-171277511b95.png")' }}
                  />
                  <div>
                    <p className="text-[#121b0e] text-base font-medium leading-normal">Lettuce</p>
                    <p className="text-[#67974e] text-sm font-normal leading-normal">$3.00/lb</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/8f908402-c1da-4f61-981c-c19b86800c6f.png")' }}
                  />
                  <div>
                    <p className="text-[#121b0e] text-base font-medium leading-normal">Cucumbers</p>
                    <p className="text-[#67974e] text-sm font-normal leading-normal">$2.75/lb</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/f7494fd1-9509-4620-aae4-2c70a27916d7.png")' }}
                  />
                  <div>
                    <p className="text-[#121b0e] text-base font-medium leading-normal">Bell Peppers</p>
                    <p className="text-[#67974e] text-sm font-normal leading-normal">$3.50/lb</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/0e20c3a8-c3af-4bce-a209-5b6f613d8796.png")' }}
                  />
                  <div>
                    <p className="text-[#121b0e] text-base font-medium leading-normal">Carrots</p>
                    <p className="text-[#67974e] text-sm font-normal leading-normal">$2.00/lb</p>
                  </div>
                </div>
              </div>
              <div className="flex px-4 py-3">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#ebf3e7] text-[#121b0e] text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">View all listings</span>
                </button>
              </div>
              <h2 className="text-[#121b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Contract Details</h2>
              <div className="px-4 py-3 @container">
                <div className="flex overflow-hidden rounded-xl border border-[#d7e7d0] bg-[#f9fcf8]">
                  <table className="flex-1">
                    <thead>
                      <tr className="bg-[#f9fcf8]">
                        <th className="table-343e211c-80b7-4e37-8349-cb8714ec0928-column-120 px-4 py-3 text-left text-[#121b0e] w-[400px] text-sm font-medium leading-normal">
                          Contract ID
                        </th>
                        <th className="table-343e211c-80b7-4e37-8349-cb8714ec0928-column-240 px-4 py-3 text-left text-[#121b0e] w-[400px] text-sm font-medium leading-normal">
                          Expiry Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-[#d7e7d0]">
                        <td className="table-343e211c-80b7-4e37-8349-cb8714ec0928-column-120 px-4 py-3 text-[#121b0e] text-sm font-normal leading-normal">
                          12455781
                        </td>
                        <td className="table-343e211c-80b7-4e37-8349-cb8714ec0928-column-240 px-4 py-3 text-[#121b0e] text-sm font-normal leading-normal">
                          10/09/2024
                        </td>
                      </tr>
                      <tr className="border-t border-[#d7e7d0]">
                        <td className="table-343e211c-80b7-4e37-8349-cb8714ec0928-column-120 px-4 py-3 text-[#121b0e] text-sm font-normal leading-normal">
                          12938456
                        </td>
                        <td className="table-343e211c-80b7-4e37-8349-cb8714ec0928-column-240 px-4 py-3 text-[#121b0e] text-sm font-normal leading-normal">
                          15/09/2024
                        </td>
                      </tr>
                      <tr className="border-t border-[#d7e7d0]">
                        <td className="table-343e211c-80b7-4e37-8349-cb8714ec0928-column-120 px-4 py-3 text-[#121b0e] text-sm font-normal leading-normal">
                          13827914
                        </td>
                        <td className="table-343e211c-80b7-4e37-8349-cb8714ec0928-column-240 px-4 py-3 text-[#121b0e] text-sm font-normal leading-normal">
                          20/09/2024
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
