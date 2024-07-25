import { CompanyLogo, hasLogo } from "../company-logo/CompanyLogo"
import { ContentEffect } from "../duo-done/DuoTone"
import {
  itemClass,
  listClass,
  logoClass,
  rootClass,
  titleClass
} from "./CustomersList.css"

export function CustomersList({ data }) {
  return (
    <div className={rootClass}>
      <h1 className={titleClass}>Kunden</h1>
      <ul className={listClass}>
        {data.map(
          (customer) =>
            hasLogo(customer.logo) && (
              <li key={customer.name} className={itemClass}>
                <ContentEffect invert boost end="#ded9dd" start="#3F2B3D">
                  <CompanyLogo
                    name={customer.logo}
                    alt={customer.name}
                    className={logoClass}
                  />
                </ContentEffect>
              </li>
            )
        )}
      </ul>
    </div>
  )
}
