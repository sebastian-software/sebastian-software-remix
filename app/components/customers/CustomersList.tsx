import { buildShades } from "@effective/color"

import { CompanyLogo, hasLogo } from "../company-logo/CompanyLogo"
import { DuoTone } from "../duo-done/DuoTone"
import {
  itemClass,
  listClass,
  logoClass,
  rootClass,
  titleClass
} from "./CustomersList.css"

const violetShades = buildShades("#FFFFFF", "#3F2B3D", {
  colorSteps: 20
})

export function CustomersList({ data }) {
  console.log("Customers:", data)

  return (
    <div className={rootClass}>
      <h1 className={titleClass}>Kunden</h1>
      <ul className={listClass}>
        {data.map(
          (customer) =>
            hasLogo(customer.logo) && (
              <li key={customer.name} className={itemClass}>
                <DuoTone useInvert useBoost duoEnd="#ded9dd" duoStart="#857784">
                  <CompanyLogo
                    name={customer.logo}
                    alt={customer.name}
                    className={logoClass}
                  />
                </DuoTone>
              </li>
            )
        )}
      </ul>
    </div>
  )
}
