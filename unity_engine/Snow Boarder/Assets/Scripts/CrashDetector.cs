using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class CrashDetector : MonoBehaviour
{
    [SerializeField] ParticleSystem fallEffect;
    [SerializeField] float delayOnRestart = 1f;
    [SerializeField] AudioClip crashSFX;

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.tag == "Ground")
        {
            FindAnyObjectByType<PlayerController>().DisableControls();
            fallEffect.Play();
            GetComponent<AudioSource>().PlayOneShot(crashSFX);
            Invoke("RestartScene", delayOnRestart);
        }
    }

    void RestartScene()
    {
        SceneManager.LoadScene(0);
    }
}
