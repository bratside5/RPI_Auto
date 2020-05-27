import tw from "twin.macro";

export const MainWrapper = tw.div`flex items-center justify-center align-middle content-start h-screen w-screen bg-gray-800`;
export const GridWrapper = tw.div`grid grid-cols-4 gap-4 items-center p-3`;
export const MenuContainer = tw.a`flex items-center justify-center h-48 max-h-full bg-gray-700 align-middle content-start p-6 shadow-lg rounded-lg`;

export const MenuImage = tw.img`object-contain object-cover object-scale-down h-48`;
export const MenuTitle = tw.div``;

export const RPMenuContainer = tw.button`flex items-center justify-center h-48 max-h-full bg-gray-700 align-middle content-start p-6 shadow-lg rounded-lg`;
