import styles from "@/styles/Main.module.css";
import Sidebar from "@/components/Sidebar";
import Visualizer from "@/components/Visualizer";

const Main: React.FC<{}> = () => {
  return (
    <div className={styles.flexContainer}>
      <Sidebar />
      <Visualizer />
    </div>
  );
};

export default Main;
