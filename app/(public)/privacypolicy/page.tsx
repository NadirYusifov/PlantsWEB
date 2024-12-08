import PrivacyPolicyCollect from '@/components/pages/PrivacyPolicy/PrivacyPolicyCollect'
import PrivacyPolicyCommitment from '@/components/pages/PrivacyPolicy/PrivacyPolicyCommitment'
import PrivacyPolicyConstent from '@/components/pages/PrivacyPolicy/PrivacyPolicyConsent'
import PrivacyPolicyData from '@/components/pages/PrivacyPolicy/PrivacyPolicyData'
import PrivacyPolicyHeader from '@/components/pages/PrivacyPolicy/PrivacyPolicyHeader'
import PrivacyPolicyInformation from '@/components/pages/PrivacyPolicy/PrivacyPolicyInformation'
import PrivacyPolicySecurity from '@/components/pages/PrivacyPolicy/PrivacyPolicySecurity'
import PrivacyPolicyTHS from '@/components/pages/PrivacyPolicy/PrivacyPolicyTHS'

export default function PrivacyPolicy() {
    return (
        <>
            <PrivacyPolicyHeader />
            <PrivacyPolicyCollect />
            <PrivacyPolicyInformation />
            <PrivacyPolicyData />
            <PrivacyPolicyConstent />
            <PrivacyPolicySecurity />
            <PrivacyPolicyTHS />
            <PrivacyPolicyCommitment />
        </>
    )
}
