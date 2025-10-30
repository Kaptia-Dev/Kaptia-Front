import React from "react";
import styles from "./DashboardContent.module.css";

const DashboardContent: React.FC = () => {
  return (
    <div className={styles["dashboardContent"]}>
      {/* Header Section */}
      <div className={styles["headerSection"]}>
        <h1 className={styles["welcomeTitle"]}>Bienvenido Usuario</h1>
        <div className={styles["searchContainer"]}>
          <input 
            type="text" 
            placeholder="Buscar..." 
            className={styles["searchInput"]}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className={styles["mainContent"]}>
        {/* Left Column - Indicators */}
        <div className={styles["leftColumn"]}>
          <div className={styles["indicatorsGrid"]}>
            <div className={styles["indicatorCard"]}>
              <h3>Indicador 1</h3>
            </div>
            <div className={styles["indicatorCard"]}>
              <h3>Indicador 2</h3>
            </div>
            <div className={styles["indicatorCard"]}>
              <h3>Indicador 3</h3>
            </div>
            <div className={styles["indicatorCard"]}>
              <h3>Indicador 4</h3>
            </div>
            <div className={styles["indicatorCard"]}>
              <h3>Indicador 4</h3>
            </div>
          </div>
        </div>

        {/* Right Column - Alerts and Reminders */}
        <div className={styles["rightColumn"]}>
          {/* Alerts Section */}
          <div className={styles["alertsSection"]}>
            <h3 className={styles["sectionTitle"]}>Alertas de seguimiento</h3>
            <div className={styles["alertsList"]}>
              <div className={styles["alertItem"]}>
                <div className={styles["alertHeader"]}>
                  <span className={styles["alertTitle"]}>Título oferta</span>
                </div>
                <p className={styles["alertDescription"]}>
                  Breve descripción de la oferta que se promociona...
                </p>
                <button className={styles["alertButton"]}>Ver más</button>
              </div>
              <div className={styles["alertItem"]}>
                <div className={styles["alertHeader"]}>
                  <span className={styles["alertTitle"]}>Título oferta</span>
                </div>
                <p className={styles["alertDescription"]}>
                  Breve descripción de la oferta que se promociona...
                </p>
                <button className={styles["alertButton"]}>Ver más</button>
              </div>
              <div className={styles["alertItem"]}>
                <div className={styles["alertHeader"]}>
                  <span className={styles["alertTitle"]}>Título oferta</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reminders Section */}
          <div className={styles["remindersSection"]}>
            <h3 className={styles["sectionTitle"]}>Recordatorios</h3>
            <div className={styles["remindersList"]}>
              <div className={styles["reminderItem"]}>
                <div className={styles["reminderIcon"]}></div>
                <div className={styles["reminderContent"]}>
                  <span className={styles["reminderTitle"]}>Zoom con cliente x (CRM)</span>
                  <span className={styles["reminderTime"]}>9:00 hrs</span>
                  <span className={styles["reminderDate"]}>Vie 14 mar</span>
                </div>
              </div>
              <div className={styles["reminderItem"]}>
                <div className={styles["reminderIcon"]}></div>
                <div className={styles["reminderContent"]}>
                  <span className={styles["reminderTitle"]}>Zoom con cliente x (CRM)</span>
                  <span className={styles["reminderTime"]}>9:00 hrs</span>
                  <span className={styles["reminderDate"]}>Vie 14 mar</span>
                </div>
              </div>
              <div className={styles["reminderItem"]}>
                <div className={styles["reminderIcon"]}></div>
                <div className={styles["reminderContent"]}>
                  <span className={styles["reminderTitle"]}>Zoom con cliente x (CRM)</span>
                  <span className={styles["reminderTime"]}>9:00 hrs</span>
                  <span className={styles["reminderDate"]}>Vie 14 mar</span>
                </div>
              </div>
              <div className={styles["reminderItem"]}>
                <div className={styles["reminderIcon"]}></div>
                <div className={styles["reminderContent"]}>
                  <span className={styles["reminderTitle"]}>Zoom con cliente x (CRM)</span>
                  <span className={styles["reminderTime"]}>9:00 hrs</span>
                  <span className={styles["reminderDate"]}>Vie 14 mar</span>
                </div>
                <button className={styles["reminderButton"]}>Unir a llamada</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
