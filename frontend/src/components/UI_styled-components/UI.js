import tw from "twin.macro";

// Globals
export const MainWrapper = tw.div`flex items-center justify-center align-middle content-start h-screen w-screen bg-gray-800`;
export const GridWrapper = tw.div`grid grid-cols-4 gap-4 items-center p-3`;
export const MenuFooter = tw.div`min-w-full max-h-full mt-2 p-3 h-12 bg-gray-700 overflow-auto `;

// Media Page
export const MenuContainer = tw.a`flex items-center justify-center h-48 max-h-full bg-gray-700 align-middle content-start p-6 shadow-lg rounded-lg`;
export const MoreMenuContainer = tw.div`flex items-center justify-center h-48 max-h-full bg-gray-700 align-middle content-start p-6 shadow-lg rounded-lg`;
export const MenuImage = tw.img`object-contain object-cover object-scale-down h-32 p-3`;
export const MenuTitle = tw.div``;
export const MoreImage = tw.img`object-contain object-cover object-scale-down h-24 p-3`;
export const RPMenuContainer = tw.button`flex items-center justify-center h-48 max-h-full bg-gray-700 align-middle content-start p-6 shadow-lg rounded-lg`;
export const ErrorText = tw.div`text-xl text-white items-center justify-center align-middle content-start`;

// Vehicle Page
export const VehicleMenuImage = tw.div``;
export const VehicleMenuModal = tw.div`px-6 py-3 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`;
export const VMModalContainer = tw.div`relative w-auto mx-auto max-w-3xl`;
export const VMModalBg = tw.div`border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-900 outline-none focus:outline-none`;
export const VMModalTitleContainer = tw.div`flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t`;
export const VMModalTitle = tw.h3`text-3xl text-gray-200 font-semibold`;
export const VMModalClose = tw.button`p-2 ml-2 bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none`;
export const VMModalIconsContainer = tw.div`relative px-6 py-2 flex items-center justify-around`;
export const PowerOffIcon = tw.button`flex items-center justify-around px-6 py-2`;
export const VMModalIconsTitleContainer = tw.div`flex items-center justify-around px-2 mb-3`;
export const VMModalIconsTitle = tw.h3`text-gray-300`;
// export const # = tw.div``;
// export const # = tw.div``;
// export const # = tw.div``;
// export const # = tw.div``;
// export const # = tw.div``;
// export const # = tw.div``;
// export const # = tw.div``;
// export const # = tw.div``;
// export const # = tw.div``;
// export const # = tw.div``;
