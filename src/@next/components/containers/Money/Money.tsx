import React from "react";
import {IProps} from "./types";

import {useUserDetails} from "@sdk/react";

export const Money: React.FC<IProps> = ({
                                            money,
                                            defaultValue,
                                            ...props
                                        }: IProps) => {
  const { data: user } = useUserDetails();
  if (!money || ! user) {
    return <span>{defaultValue}</span>;
  }
    return (
        <span {...props}>
      {money.currency && money.currency !== ""
          ? money.amount.toLocaleString(undefined, {
              currency: money.currency,
              style: "currency",
          })
          : money.amount.toString()}
    </span>
    );
};

Money.displayName = "Money";
export default Money;
