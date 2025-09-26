import dynamic from "next/dynamic"

const SceneCanvas = dynamic(() => import("@/components/scene-canvas").then(m => m.SceneCanvas), {
  ssr: false,
})

export default function StealthPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">

      <div className="absolute inset-0 z-0">
        <SceneCanvas />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Logo/Brand mark */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-center mb-6">
            Coming soon.
          </h1>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-muted-foreground text-sm">{"© 2025 Olmsted Tech. All rights reserved."}</p>
        </div>
      </div>
    </div>
  )
}
