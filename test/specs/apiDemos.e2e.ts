import ApiDemosPage from '../pageobjects/apiDemos.page';
import Gestures from '../helpers/Gestures';

describe('Api Demos test', function () {
	before(async () => {
		await ApiDemosPage.waitForActionBarShown();
	});

	it('should see the text “API Demos” is displayed in Action bar', async function () {
		await expect(ApiDemosPage.actionBarTitle).toHaveText(
			ApiDemosPage.actionBarText
		);
	});

	it('should see the "Soft Input Modes" menu', async function () {
		await ApiDemosPage.appMenu.click();
		await ApiDemosPage.activityMenu.click();
		await Gestures.checkIfDisplayedWithSwipeUp(
			await ApiDemosPage.softInputModesMenu,
			5
		);
	});

	it('should see the "Soft Input Modes" description is displayed', async function () {
		await ApiDemosPage.softInputModesMenu.click();
		await expect(ApiDemosPage.softInputModesDesc).toBeDisplayed();
	});

	it('should see the height of “RED” box is larger than the height of “GREEN” box when the “Pan” option is selected', async function () {
		await ApiDemosPage.resizeMode.click();
		await expect(ApiDemosPage.panMode).toBeDisplayed();
		await ApiDemosPage.panMode.click();
		await expect(ApiDemosPage.panMode).not.toBeDisplayed();
		const redBoxEle = await ApiDemosPage.redBox;
		const greenBoxEle = await ApiDemosPage.greenBox;
		const { height: redBoxHeight } = await redBoxEle.getSize();
		const { height: greenBoxHeight } = await greenBoxEle.getSize();
		await expect(redBoxHeight).toBeGreaterThan(greenBoxHeight);
	});

	it('should see the height of “GREEN” box is larger than the height of “RED” box when inputting 25 lines of the text in the green box', async function () {
		await ApiDemosPage.resizeMode.click();
		await expect(ApiDemosPage.unspecifiedMode).toBeDisplayed();
		await ApiDemosPage.unspecifiedMode.click();
		await expect(ApiDemosPage.unspecifiedMode).not.toBeDisplayed();
		await ApiDemosPage.greenBox.clearValue();
		await ApiDemosPage.greenBox.setValue(ApiDemosPage.generateMockText(25));
		const redBoxEle = await ApiDemosPage.redBox;
		const greenBoxEle = await ApiDemosPage.greenBox;
		const { height: redBoxHeight } = await redBoxEle.getSize();
		const { height: greenBoxHeight } = await greenBoxEle.getSize();
		await expect(greenBoxHeight).toBeGreaterThan(redBoxHeight);
	});
});
