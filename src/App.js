import { useAdblockDetector } from "react-adblock-detector";
import { AdBlockDetector } from "./components/AdBlockDetector/AdBlockDetector";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  const [isAdBlockCheckComplete, isAdBlockerDetected] = useAdblockDetector();

  return (
    <div>
      {isAdBlockCheckComplete ? (
        isAdBlockerDetected ? (
          <AdBlockDetector />
        ) : (
          <HomePage />
        )
      ) : (
        "Checking for ad-blocker"
      )}
    </div>
  );
}

export default App;
