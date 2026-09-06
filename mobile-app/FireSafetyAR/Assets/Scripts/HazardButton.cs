using UnityEngine;
using TMPro;

public class HazardButton : MonoBehaviour
{
    public TextMeshProUGUI instructionText;

    public GameObject glovesButton;
    public GameObject sunglassesButton;
    public GameObject sandalsButton;

    public GameObject fireObject;
    public GameObject hazardArea;

    public void IdentifyHazard()
    {
        instructionText.text =
            "Correct! Fire hazard identified.\nSelect the appropriate PPE.";

        // Hide Fire
        fireObject.SetActive(false);

        // Hide the grey HazardArea object
        hazardArea.SetActive(false);

        // Hide FIRE HAZARD button
        gameObject.SetActive(false);

        // Show PPE buttons
        glovesButton.SetActive(true);
        sunglassesButton.SetActive(true);
        sandalsButton.SetActive(true);
    }
}