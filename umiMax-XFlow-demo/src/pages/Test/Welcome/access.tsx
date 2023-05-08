import {useAccess,Access } from "@umijs/max";
import { Foo } from "typings";

 
const PageA = (props:Foo) => {
  const { ownerId } = props;
  const access = useAccess();
  return (
  <>
    <Access
      accessible={access.canReadFoo}
      fallback={<div>Can not read foo content.</div>}
    >
      Foo content.
    </Access>

    <Access
      accessible={access.canUpdateFoo}
      fallback={<div>Can not update foo.</div>}
    >
      Update foo.
    </Access>
    
    <Access
      accessible={access.canDeleteFoo(ownerId)}
      fallback={<div>Can not delete foo.</div>}
    >
      Delete foo.
    </Access>
    </>
  );
};
 
export default PageA;