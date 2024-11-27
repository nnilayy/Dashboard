import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd"
import Header from "./header"

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div >

    <ThemedLayoutV2
      Header={Header}
      Title={(titleProps) => <ThemedTitleV2 {...titleProps} text="Customer Relations Management & Analytics Platform" />}
    >
      {children}
    </ThemedLayoutV2>
    </div>
  )
}

export default Layout