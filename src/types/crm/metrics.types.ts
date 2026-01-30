export interface MetricCardProps {
  label: string;
  value: string | number;
  className?: string;
}

export interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
  color?: "blue" | "emerald" | "purple" | "amber";
  className?: string;
}

export interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export interface AlertItem {
  id: string;
  message: string;
  type?: "info" | "warning" | "error" | "success";
}

export interface AlertCardProps {
  label: string;
  alerts: AlertItem[];
  className?: string;
}
