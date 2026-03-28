import { useState } from "react";

const CATIMAGES = [
  {
    url: "https://imgs.search.brave.com/bAdI7a7qnuuOIJphttt3DfbzLnCU7ZDMtnkejXq6UII/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMDkz/OC81NDk5L2kvNDUw/L2RlcG9zaXRwaG90/b3NfNTQ5OTg2MTMt/c3RvY2stcGhvdG8t/Z2luZ2VyLWNhdC5q/cGc",
    name: "orage cat",
  },
  {
    url: "https://imgs.search.brave.com/YzG9FgYN5qLWsiYyJ4dUEvxav9e98dBH0loR8YPRA1E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/ODc3NTY1L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtYnJvd24tY2F0/LWFnYWluc3QtYS1n/cmF5LWJhY2tncm91/bmQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWlGcFFNSzlF/aTIzVm9XcExLa2Zh/TFVtdXN5Y3VaWllV/OWtWMjNzT2F6YzQ9",
    name: "wink cat",
  },
  {
    url: "https://imgs.search.brave.com/lZtf1S7JKFcaZs2lhxTpAtaJzTk_V35Xt8ys4htuVBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBvc2VzLXBl/cmZlY3RseS5qcGc_/d2lkdGg9MTAwMCZm/b3JtYXQ9cGpwZyZl/eGlmPTAmaXB0Yz0w",
    name: "stange cat",
  },
  {
    url: "https://imgs.search.brave.com/t6Nv0DwxoIACRxxtX2h7yt31ux5SCXHWgHVpoGh1diw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzM2Lzk5LzIy/LzM2MF9GXzIzNjk5/MjI4M19zTk94Q1ZR/ZUZMZDVwZHFhS0do/OERSR01aeTdQNFhL/bS5qcGc",
    name: "cute cat",
  },
];

export function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  return (
    <div>
      <p className="underline text-center py-4">Click on an image!</p>
      <div className="flex justify-center items-center flex-wrap gap-4 px-16">
        {CATIMAGES.map(({ url, name }, index) => (
          <CatPreveiwImage
            key={index}
            url={url}
            name={name}
            index={index}
            setSelectedImageIndex={setSelectedImageIndex}
          />
        ))}
      </div>
      <div className="flex justify-center items-center">
        {selectedImageIndex === null ? (
          ""
        ) : (
          <SelectedImagePreview selectedImageIndex={selectedImageIndex} />
        )}
      </div>
    </div>
  );
}

type CatPreveiwImageProps = {
  url: string;
  name: string;
  index: number;
  setSelectedImageIndex: (index: number) => void;
};

function CatPreveiwImage({
  url,
  name,
  index,
  setSelectedImageIndex,
}: CatPreveiwImageProps) {
  return (
    <div
      onClick={() => setSelectedImageIndex(index)}
      className="w-52 h-52 rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-white hover:scale-110 duration-300 ease-in-out cursor-pointer "
    >
      <img className="w-full h-full object-cover" src={url} alt={name} />
    </div>
  );
}

type SelectedImagePreviewProps = {
  selectedImageIndex: number;
};

function SelectedImagePreview({
  selectedImageIndex,
}: SelectedImagePreviewProps) {
  return (
    <div>
      <p className="text-center font-bold text-xl pt-6">Selected Image</p>
      <div className="mt-2 w-lg h-lg  rounded-2xl border border-gray-200 shadow-2xl overflow-hidden bg-white">
        <img
          className="w-full h-full object-cover"
          src={CATIMAGES[selectedImageIndex].url}
          alt={CATIMAGES[selectedImageIndex].name}
        />
      </div>
    </div>
  );
}
