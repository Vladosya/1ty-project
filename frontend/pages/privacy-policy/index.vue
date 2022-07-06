<template>
	<div class="main">
		<div class="container">
			<div class="main-header">
				<div class="main-header-left">
					<div class="main-header-left__title" @click="$router.push('/')">1ty.me - "One Time"</div>
				</div>
				<div class="main-header-right">
					<div class="main-header-right__title">
						One Time Self Destructing Links For Sharing Sensitive Information
					</div>
				</div>
			</div>
		</div>
		<div class="main-content">
			<div class="container">
				<div class="main-content-privacy">
					<div class="main-content-privacy__title">1ty.me Privacy Policy</div>
					<div class="main-content-privacy__subtext">Last modified: 4/18/2011</div>
					<div class="main-content-privacy__text">
						Obviously, privacy is important to us and our service, 1ty.me™ was created to help
						ensure the privacy of our clients, and users of 1ty.me. Below is a description of how
						your notes are kept private and what, if any, information is collected and stored.
					</div>
					<div class="main-content-privacy__header">What information do we collect?</div>
					<div class="main-content-privacy__text">
						We track the IP address of a submission, the date, and time it was submitted. These
						are saved by the system only to identify the note. We will never use this information
						for any purpose other than the service described on the 1ty.me site. We may also
						collect your email, only for the purpose of sending a notification that your note(s)
						has been viewed by the recipient. Submission of your email is voluntary, and any email
						submitted will be encrypted by the system and destroyed once the notification email
						has been sent. We will not store or use emails for any purpose other than to provide
						you with the service described here.
					</div>
					<div class="main-content-privacy__header">How are your notes kept private?</div>
					<div class="main-content-privacy__text">
						The link that is generated is a random sequence of characters that only you, the user,
						will have. No one else can view your link or gain access to it unless you choose to
						share that link. The link is only good for ONE view and then all information contained
						in the link is destroyed. You can destroy the information by viewing the link yourself
						at any time.
					</div>
					<div class="main-content-privacy__text">
						No one, not even 1ty.me staff, can read a note stored in the secure database. All
						notes (and corresponding emails, if applicable) are encrypted, and the key to
						decrypting the note is contained only in the randomly generated link you, the user,
						has access to. The key is applied only when using the link. 1ty.me is never in
						possession of the decryption key which is contained only in the link.
					</div>
					<div class="main-content-privacy__text">
						When a note is retrieved, by accessing a link, the data is immediately removed from
						the database and can never be viewed or accessed in any way again.
					</div>
					<div class="main-content-privacy__text">
						When a note is not retrieved after 30 days, 1ty.me removes it permanently, just as if
						it were read.
					</div>
					<div class="main-content-privacy__text">
						We do everything in our power to protect the site against unauthorized access,
						modification or destruction of the data. But, even if someone or something could
						manage to gain access to the database, they would be unable to read the notes since
						their contents are encrypted and can’t be decrypted without the links which we do not
						ever have access to.
					</div>
					<div class="main-content-privacy__header">Why we collect Emails</div>
					<div class="main-content-privacy__text">
						You can choose to enter in your email to receive a notification that your message was
						read. This is optional. All emails are encrypted, just like the message, and destroyed
						once the message has been opened and the notification is sent. If you choose to enter
						your email to receive a notification of when your message is read, you can also select
						a box that will add your email to our newsletter list. This will then save your email
						on our secure server. We only send occasional emails, and we never sell or share the
						emails collected for our newsletters with any third party. We will only use your email
						to send you our newsletter, which includes industry information, new technology
						developments at ApogeeInvent, and special deals we may be offering. We may also send
						occasion informational or marketing emails. You can always opt out at any time to stop
						receiving emails from ApogeeInvent.
					</div>
					<div class="main-content-privacy__header">Disclaimer</div>
					<div class="main-content-privacy__text">
						We cannot be responsible for the information contained in the notes, since we never
						can view or moderate this information in any way. You, the user, are responsible for
						keeping the link containing the decryption key secure and when a person clicks the
						note's link, 1ty.me declines any responsibility related to the note's content.
					</div>
					<div class="main-content-privacy__text">
						1ty.me does not share nor sell any information to others, nor use it in any way not
						mentioned in this Privacy Policy.
					</div>
					<div class="main-content-privacy__text">
						Please note that this Privacy Policy may change from time to time. Any changes will be
						posted here. We will post the date of the latest version.
					</div>
					<div class="main-content-privacy__header">Contact information</div>
					<div class="main-content-privacy__text">
						If you have any questions about this Privacy Policy or other concerns regarding
						privacy issues, please contact us at <a href="#">info@apogeeinvent.com.</a>
					</div>
					<div class="main-content-privacy__text">
						1ty.me is a service provided by ApogeeInvent, a fast-growing technology company
						located in Idaho. We specialize in web systems and design:
						<a href="https://www.apogeeinvent.com/?ai_sid=370955&ai_sid_key=smj1qx717a">www.apogeeinvent.com</a>
					</div>
					<div class="main-content-privacy__infoheader">Toll Free Number</div>
					<div class="main-content-privacy__infotext">866.808.2963</div>
					<div class="main-content-privacy__infoheader">Email</div>
					<div class="main-content-privacy__infotext">
						<a href="#">info@apogeeinvent.com</a>
					</div>
					<div class="main-content-privacy__infoheader">Corporate Mailing Address</div>
					<div class="main-content-privacy__infotext">258 Idaho St</div>
					<div class="main-content-privacy__infotext">American Falls, ID 83211</div>
				</div>
			</div>
		</div>
		<div class="main-footer">
			<div class="container">
				<div class="main-footer-content">
					<div class="main-footer-content__left">
						<div>
							<NuxtLink to="/" class="main-footer-content__left_link">Home</NuxtLink>
						</div>
						<div>
							<a class="main-footer-content__left_link" href="#">About 1ty.me</a>
						</div>
						<div>
							<a class="main-footer-content__left_link" href="#">Frequently Asked Questions</a>
						</div>
						<div>
							<a class="main-footer-content__left_link" href="#">Privacy Policy</a>
						</div>
						<div>
							<a class="main-footer-content__left_link" href="#">ApogeeInvent</a>
						</div>
					</div>
					<div class="main-footer-content__right">© 2011 - 2022 ApogeeInvent</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: "privacy-policy-page"
})
</script>

<style lang="css" scoped>
.main {
	width: 100%;
	height: 100vh;
	background-color: #424b7a;
}

.container {
	max-width: 1170px;
	margin: 0 auto;
}

.main-header {
	display: flex;
	align-items: center;
	padding: 15px 0 0 0;
}

.main-header-left {
	width: 50%;
	padding: 0 15px;
}

.main-header-left__title {
	cursor: pointer;
	margin: 2px 0 10px;
	font-size: 36px;
	color: #fff;
}

.main-header-right {
	width: 50%;
}

.main-header-right__title {
	padding: 33px 0;
	font-style: italic;
	font-weight: normal;
	font-size: 14px;
	color: #fff;
}

.main-content {
	padding: 5px 0 50px;
	background-color: #fff;
}

.main-content-privacy {
	padding: 0 15px;
}

.main-content-privacy__title {
	margin: 20px 0 10px;
	font-size: 30px;
	color: #333333;
}

.main-content-privacy__subtext {
	margin: 0 0 10px;
	font-size: 14px;
	font-style: italic;
	color: #333333;
}

.main-content-privacy__text {
	margin: 0 0 10px;
	font-size: 14px;
	color: #333333;
}

.main-content-privacy__text>a {
	color: #428bca;
	text-decoration: none;
}

.main-content-privacy__text>a:hover {
	color: #2a6496;
	text-decoration: underline;
}

.main-content-privacy__header {
	margin: 20px 0 10px;
	font-size: 24px;
	color: #333333;
}

.main-content-privacy__infoheader {
	font-weight: 700;
	font-size: 14px;
	color: #333333;
}

.main-content-privacy__infotext {
	font-size: 13px;
	color: #333333;
}

.main-content-privacy__infotext>a {
	color: #428bca;
	text-decoration: none;
}

.main-content-privacy__infotext>a:hover {
	color: #2a6496;
	text-decoration: underline;
}

.main-footer {
	padding: 15px 0 0;
	background-color: #424b7a;
}

.main-footer-content {
	display: flex;
}

.main-footer-content__left {
	padding: 0 15px;
	width: 350px;
}

.main-footer-content__left_link {
	font-size: 14px;
	color: #fff;
	text-decoration: none;
}

.main-footer-content__left_link:hover {
	color: #fff;
}

.main-footer-content__right {
	display: flex;
	justify-content: center;
	width: 350px;
	margin: 0 0 10px;
	font-size: 14px;
	color: #fff;
}

@media (max-width: 1194px) {
	.container {
		max-width: 970px;
	}
}

@media (max-width: 1024px) {
	.container {
		max-width: 970px;
	}
}

@media (max-width: 926px) {
	.container {
		max-width: 750px;
	}
}

@media (max-width: 896px) {
	.main-header {
		flex-wrap: wrap;
		padding: 15px 0 10px 0;
	}

	.main-header-left {
		width: 100%;
	}

	.main-header-right {
		width: 100%;
	}

	.main-header-right__title {
		margin: 0 15px;
		padding: 0;
	}
}

@media (max-width: 844px) {
	.main-header {
		flex-wrap: wrap;
		padding: 15px 0 10px 0;
	}

	.main-header-left {
		width: 100%;
	}

	.main-header-right {
		width: 100%;
	}

	.main-header-right__title {
		margin: 0 15px;
		padding: 0;
	}
}

@media (max-width: 834px) {
	.container {
		max-width: 750px;
	}

	.main-header-left__title {
		margin: 0;
	}

	.main-header {
		flex-wrap: wrap;
		padding: 15px 0 10px 0;
	}

	.main-header-left {
		width: 100%;
	}

	.main-header-right {
		width: 100%;
	}

	.main-header-right__title {
		margin: 0 15px;
		padding: 0;
	}

	.main-footer-content__left_link {
		font-size: 13px;
	}

	.main-footer-content__right {
		font-size: 13px;
	}
}

@media (max-width: 390px) {
	.main-header-left__title {
		font-size: 30px;
	}

	.main-header-right__title {
		font-size: 11px;
	}

	.main-footer-content__left_link {
		font-size: 11px;
	}

	.main-footer-content__right {
		font-size: 11px;
	}
}

@media (max-width: 320px) {
	.main-header-left__title {
		font-size: 25px;
	}

	.main-header-right__title {
		font-size: 10px;
	}

	.main-footer-content__left_link {
		font-size: 9px;
	}

	.main-footer-content__right {
		font-size: 9px;
	}
}
</style>