import { SimpleHero } from '@/components'
import { ProtectPage } from '@/guards'
import { ProfileSection } from './components'
import { Metadata } from 'next'
import { getTitle } from '@/constants'
import jsonData from '@/data.json'

const { page, title } = jsonData.pages.dynamic.profile

export const metadata: Metadata = {
  title: getTitle(title),
}

const Profile = () => (
  <ProtectPage {...{ page }}>
    <SimpleHero title={title} />
    <ProfileSection />
  </ProtectPage>
)

export default Profile
