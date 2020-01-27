import React from "react";
import { PageLoader } from "./PageLoader";

interface LoadingIndicatorProps {
  isLoading: boolean;
}

export const LoadingIndicator = <P extends {}>(
  WrappedComponent: React.ComponentType<P>
) =>
  class WithLoading extends React.Component<P & LoadingIndicatorProps> {
    render() {
      const { isLoading, ...props } = this.props;

      if (isLoading) {
        return <PageLoader />;
      } else {
        return <WrappedComponent {...(props as P)} />;
      }
    }
  };
