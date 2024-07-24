import { CompanyLogo } from "../company-logo/CompanyLogo"
import {
  itemClass,
  listClass,
  logoClass,
  rootClass,
  titleClass
} from "./CustomersList.css"

export function CustomersList({ data }) {
  console.log("Customers:", data)

  return (
    <div className={rootClass}>
      <h1 className={titleClass}>Kunden</h1>
      <ul className={listClass}>
        {data.map((customer) => (
          <li key={customer.name} className={itemClass}>
            <CompanyLogo
              name={customer.logo}
              alt={customer.name}
              className={logoClass}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
