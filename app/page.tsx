"use client";

import Editor from "@/components/Editor";
import { ImageStore } from "@/lib/image-store";
import { LayerStore } from "@/lib/layer-store";

export default function Home() {
  return (
    <LayerStore.Provider
      initialValue={{
        layers: [
          {
            id: crypto.randomUUID(),
            url: "",
            height: 0,
            width: 0,
            publicId: "",
          },
        ],
        layerComparisonMode: false,
      }}
    >
      <ImageStore.Provider initialValue={{ generating: false }}>
        <main>
          <Editor />
        </main>
      </ImageStore.Provider>
    </LayerStore.Provider>
  );
}
